import React from 'react';
import profilephoto1 from '../assets/1713174410688.jpeg';
import profilephoto2 from '../assets/Screenshot 2024-07-07 172724.png'

function Founder() {
  return (
    <div className='pb-10 font-outfit max-w-6xl mx-auto flex flex-col items-center pt-5'>
      <h1 className='text-3xl'>Founders:</h1>
      <div className='flex flex-col sm:flex-row gap-20 mt-5'>
      <div className='ml-10 mt-3 flex flex-col items-center text-xl'>
        <img src={profilephoto1} alt="Founder" className='rounded-full h-[30vh] w-auto max-w-full'/>
        <p>Founder</p>
        <p>K.Raju Mitra</p>
      </div>

      <div className='ml-10 mt-3 flex flex-col items-center text-xl'>
        <img src={profilephoto2} alt="Founder" className='rounded-full h-[30vh] w-auto max-w-full'/>
        <p>Co-Founder</p>
        <p>T.Teja</p>
      </div>
      </div>
      
    </div>
  );
}

export default Founder;

