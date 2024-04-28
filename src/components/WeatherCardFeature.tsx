import React from 'react';

function WeatherCardFeature() {
  return (
    


    <div className="w-auto bg-gray-600 p-4 rounded-md space-y-1">
            <p className='font-medium text-md text-white'>(2023-06-19)</p>
            <img className='w-10' src="https://cdn.pixabay.com/photo/2012/04/18/13/21/clouds-37009_640.png" alt="" />
            <p className=' text-white'>Temperature: 18.71</p>
            <p className=' text-white'>Wind: 4.31</p>
            <p className=' text-white'>Humidity: 76%</p>
   
    </div>
  

  );
}

export default  WeatherCardFeature;