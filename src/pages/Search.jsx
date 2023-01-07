import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Profile from '../components/Profile';
import axios from 'axios';
import Filter from '../components/Filter';
import Repositories from '../components/Repositories';

const Search = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState({});
  const [repos, setRepos] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const userData = await axios.get(`https://api.github.com/users/${id}`);
  //     setProfile(userData.data);
  //   })();
  //   (async () => {
  //     const reposData = await axios.get(
  //       `https://api.github.com/users/${id}/repos`,
  //     );
  //     setRepos(reposData.data);
  //   })();
  // }, [id]);

  useEffect(() => {
    setProfile({
      login: 'yagoramires',
      avatar_url: 'https://avatars.githubusercontent.com/u/77733200?v=4',
      html_url: 'https://github.com/yagoramires',
      name: 'Yago Ramires',
      company: 'D2B Representações',
      blog: '',
      location: 'Rio de Janeiro, RJ',
      followers: 5,
      following: 8,
    });
  }, []);

  useEffect(() => {
    setRepos([
      {
        name: 'Repo 1',
        description: 'Descrição',
        html_url: 'https://github.com/yagoramires',
        language: 'JavaScript',
      },
      {
        name: 'Repo 2',
        description: 'Descrição',
        html_url: 'https://github.com/yagoramires',
        language: 'HTML',
      },
      {
        name: 'Repo 3',
        description: 'Descrição',
        html_url: 'https://github.com/yagoramires',
        language: 'CSS',
      },
      {
        name: 'Repo 4',
        description: 'Descrição',
        html_url: 'https://github.com/yagoramires',
        language: 'TypeScript',
      },
      {
        name: 'Repo 5',
        description: 'Descrição',
        html_url: 'https://github.com/yagoramires',
        language: 'Ruby',
      },
      {
        name: 'Repo 6',
        description: 'Descrição',
        html_url: 'https://github.com/yagoramires',
        language: 'SCSS',
      },
    ]);
  }, []);

  return (
    <div className='bg-background flex flex-row md:flex-col w-full min-h-[100vh] text-text p-0'>
      <aside className='bg-background min-w-[20rem] max-h-[100vh] overflow-y-hidden'>
        <Profile user={profile} />
        <Filter repos={repos} />
      </aside>
      <section className='bg-container p-10 w-full flex h-[100vh] overflow-hidden  md:h-full sm:py-10 sm:px-5'>
        <Repositories repos={repos} />
      </section>
    </div>
  );
};

export default Search;
