import React from 'react';
import banner from '../../../public/Screenshot (168).png'

const Banner = () => {
    return (
        <div className="flex w-full px-7 ">
            
  <div className="grid h-full w-1/2 flex-grow card rounded-box place-items-center">
     <img className='w-52 my-6' src={banner} alt="" />
     <h2 className='text-5xl font-semibold'>NFD platform</h2>
     <h3 className='text-5xl font-semibold text-indigo-500 my-4'>“NFD.gg”</h3>
     <p className='text-center text-xl text-gray-500'>An Alpha community 2.0 with its own platform for participating, searching, and tracking any crypto related information.</p>
      
      <div>
            
      </div>

        </div>
  <div className="grid h-full w-1/2 flex-grow card bg-base-300 rounded-box place-items-center">content</div>
         </div>
    );
};

export default Banner;