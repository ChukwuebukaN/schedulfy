import React from 'react';
import SchedulfyLogo from '../images/SchedulfyLogo.png'

function HomePage() {
  return (
    <div className='mt-40'>
      <img src={SchedulfyLogo} alt='Schedulfy Logo' class='w-2/5 mx-auto pb-8'/>
      <h2 className='text-center text-2xl font-black pb-8'>Organize Your Week</h2>
      <button class="justify-items-centrer mt-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
      Create Schedule
      </button>
    </div>
  );
}

export default HomePage;
