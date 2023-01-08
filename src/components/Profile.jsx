import React from 'react';
import { HiUserGroup, HiLocationMarker } from 'react-icons/hi';
import { MdBusinessCenter, MdLink } from 'react-icons/md';
import { DiGithubBadge } from 'react-icons/di';

const Profile = ({ user }) => {
  return (
    <div className='md:px-4'>
      <div className='flex flex-col items-center py-4 md:flex-row '>
        <img
          src={user?.avatar_url}
          alt='Avatar'
          className='self-center rounded-full w-[70%] h-[70%] mb-4 md:w-[70px] md:h-[70px] md:mr-4 md:mb-0'
        />
        <h1 className='flex items-center gap-2 mb-2 text-title'>
          <DiGithubBadge size={30} />{' '}
          <a href={user.html_url} target='_blank' rel='noopener noreferrer'>
            {user?.login}
          </a>
        </h1>
        <h2 className='font-bold text-subtitle md:hidden'>{user?.name}</h2>
      </div>

      <div className='p-4 md:hidden'>
        <p className='flex items-center leading-[1.5]'>
          <HiUserGroup className='mr-4' size={20} />
          <span className=' text-[12px]'>
            {user?.followers}&nbsp;<i>Seguidores</i>&nbsp;&middot;&nbsp;
            {user?.following}
            &nbsp;<i>Seguindo</i>
          </span>
        </p>
        {user.company && (
          <p className='flex items-center leading-[1.5] text-[12px]'>
            <MdBusinessCenter className='mr-4 ' size={20} />
            {user.company}
          </p>
        )}
        {user.location && (
          <p className='flex items-center leading-[1.5] text-[12px]'>
            <HiLocationMarker className='mr-4 ' size={20} />
            {user.location}
          </p>
        )}
        {/* {user.blog && (
          <p className='flex items-center leading-[1.5] text-[12px]'>
            <MdLink className='mr-4 ' size={20} />
            <a
              href={user.blog}
              className='border-b-[1px]'
              target='_blank'
              rel='noopener noreferrer'
            >
              {user.blog?.replace('https://', '')}
            </a>
          </p>
        )} */}
      </div>
    </div>
  );
};

export default Profile;
