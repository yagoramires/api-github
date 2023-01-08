import React, { useEffect, useState } from 'react';

const Filter = ({ repos, setFilter }) => {
  const [languagesArray, setLanguagesArray] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  useEffect(() => {
    if (repos.length > 0) {
      (() => {
        const languages = repos.map((repo) => repo.language);
        const languagesFilter = new Set(languages);
        setLanguagesArray([...languagesFilter]);
      })();
    }
  }, [repos]);

  useEffect(() => {
    if (selectedLanguage === null) return;

    const selectedLanguageRepos = repos.filter(
      (repo) => repo.language === selectedLanguage,
    );
    setFilter(selectedLanguageRepos);
  }, [setFilter, repos, selectedLanguage]);

  const langCounter = (lang) => {
    const reposFilter = repos.filter((repo) => repo.language === lang);
    return reposFilter.length;
  };

  const selectors = languagesArray.map((lang, i) => (
    <button
      type='button'
      className={`flex items-center justify-between min-w-full min-h-[2rem] bg-container rounded-r-[20px] ${lang?.toLowerCase()}Text hover:text-text px-4 transition-all duration-300 cursor-pointer md:rounded-2xl ${lang?.toLowerCase()}Background hover:scale-x-105`}
      key={i}
      onClick={() => setSelectedLanguage(lang)}
    >
      <p>{lang}</p>
      <p>{langCounter(lang)}</p>
    </button>
  ));

  return (
    <div className='grid grid-cols-[auto] gap-[0.2rem] my-4 mx-auto pr-8  md:gap-[0.8rem] md:px-4  mobile'>
      {selectors}

      <button
        className=' hover:bg-[rgba(255,255,255,0.5)] transition-all duration-300 md:rounded-2xl rounded-r-[20px] min-h-[2rem] px-4'
        onClick={() => setFilter(null)}
      >
        Limpar
      </button>
    </div>
  );
};

export default Filter;
