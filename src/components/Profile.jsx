import React from 'react';
import { HiUserGroup, HiLocationMarker } from 'react-icons/hi';
import { MdBusinessCenter, MdLink } from 'react-icons/md';

const Profile = ({ data }) => {
  return (
    <div className='md:px-4'>
      <div className='flex flex-col items-center py-4 md:flex-row '>
        <img
          src='https://avatars.githubusercontent.com/u/77733200?v=4'
          alt='Avatar'
          className='self-center rounded-full w-[70%] h-[70%] mb-4 md:w-[70px] md:h-[70px] md:mr-4 md:mb-0'
        />
        <h1 className='mb-2 text-title'>yagoramires</h1>
        <h2 className='font-bold text-subtitle md:hidden'>Yago Ramires</h2>
      </div>

      <div className='p-4 md:hidden'>
        <p className='flex items-center leading-[1.5]'>
          <HiUserGroup className='mr-4' size={20} />
          <p className=' text-[12px]'>
            {'99999'}&nbsp;<i>Seguidores</i>&nbsp;&middot;&nbsp;{'99999'}
            &nbsp;<i>Seguindo</i>
          </p>
        </p>
        <p className='flex items-center leading-[1.5] text-[12px]'>
          <MdBusinessCenter className='mr-4 ' size={20} />
          D2B Representações
        </p>
        <p className='flex items-center leading-[1.5] text-[12px]'>
          <HiLocationMarker className='mr-4 ' size={20} />
          Hell de Janeiro
        </p>
        <p className='flex items-center leading-[1.5] text-[12px]'>
          <MdLink className='mr-4 ' size={20} />
          <a href='url' className='border-b-[1px]'>
            url
          </a>
        </p>
      </div>
    </div>
  );
};

export default Profile;
