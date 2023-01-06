import React from 'react';

const Repositories = ({ repos }) => {
  return (
    <div className='grid grid-cols-3 gap-8 lg:grid-cols-2 sm:grid-cols-[auto] w-full'>
      <div
        className={`flex flex-col justify-between bg-[rgba(0,0,0,0.25)] border-l-4 javascriptBorder p-4 w-full max-h-[128px]`}
      >
        <h3 className='text-large'>titulo</h3>
        <p className='text-small leading-[1.25] my-4'>paragrafo</p>
        <div className='flex items-center justify-between javascriptText text-small'>
          <span className='text-[inherit]'>TEST</span>{' '}
          <a href='/' className='text-[inherit] font-bold uppercase'>
            Ver
          </a>
        </div>
      </div>
    </div>
  );
};

export default Repositories;
