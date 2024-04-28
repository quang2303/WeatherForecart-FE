import React from 'react';

function WeatherCardToday() {
  return (
    


    <div className="w-full flex justify-between items-center bg-blue-600 p-6 rounded-md">
        <div className='space-y-3'>
            <p className='font-medium text-xl text-white'>London (2023-06-19)</p>
            <p className=' text-white'>Temperature: 18.71</p>
            <p className=' text-white'>Wind: 4.31</p>
            <p className=' text-white'>Humidity: 76%</p>
        </div>
        <div className='sm:mr-0 md:mr-10'>
            <img className='w-20' src="https://cdn.pixabay.com/photo/2012/04/18/13/21/clouds-37009_640.png" alt="" />
        </div>
    </div>
  

  );
}

export default  WeatherCardToday;