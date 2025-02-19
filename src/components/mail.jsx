
import { MdCropSquare } from 'react-icons/md';
import { RiStarLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

export const Mail = () => {
  const navigate = useNavigate();

  const openMail = () => {
    navigate('/mail/178687687');
  };

  return (
    <div onClick={openMail} className='flex items-start justify-between border-b border-gray-200 px-4 text-sm py-3 hover:shadow-md'>
      <div className='flex items-center gap-3'>
        <div className='flex-none text-gray-300'>
          <MdCropSquare className='w-5 h-5' />
        </div>
        <div className='flex-none text-gray-300'>
          <RiStarLine className='w-5 h-5' />
        </div>
      </div>
      <div className='flex-1 ml-4'>
        <p className='text-gray-600 truncate inline-block max-w-full'>Lorem ipsum</p>
      </div>
      <div className='flex-none text-gray-400 text-sm'>
        Time ayega
      </div>
    </div>
  );
};

