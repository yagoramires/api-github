import React from 'react';

const Repositories = ({ repos }) => {
  return (
    <div className='grid grid-cols-3 gap-8 lg:grid-cols-2 sm:grid-cols-[auto] w-full '>
      {repos &&
        repos.map((repo) => (
          <div
            key={repo.id}
            className={`flex flex-col justify-between bg-[rgba(0,0,0,0.25)] border-l-4 ${repo.language?.toLowerCase()}Border p-4 w-full max-h-[128px]`}
          >
            <h3 className='text-large'>{repo.name}</h3>
            <p className='text-small leading-[1.25] my-4'>{repo.description}</p>
            <div
              className={`flex items-center justify-between ${repo.language?.toLowerCase()}Text text-small`}
            >
              <span className='text-[inherit] italic'>{repo.language}</span>
              <a
                href={repo.html_url}
                className='text-[inherit] font-bold uppercase'
              >
                Ver
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Repositories;
