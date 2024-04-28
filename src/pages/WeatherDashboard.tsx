import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import WeatherCardToday from '../components/WeatherCardToday';
import WeatherCardFeature from '../components/WeatherCardFeature';


function WeatherDashboard() {
  return (
    <div className='bg-blue-100 sm:h-full md:h-screen'>

        <Header></Header>

        <div className='grid sm:grid-cols-1 md:grid-cols-3 m-10 gap-x-10'>
          <div className=''>
            <Search></Search>
          </div>
          <div className='md:col-span-2 space-y-4'>
            <WeatherCardToday/>
            
            <p className='text-2xl font-medium'>4-Day Forecast</p>
            
            <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-2'>
              <WeatherCardFeature/>
              <WeatherCardFeature/>
              <WeatherCardFeature/>
              <WeatherCardFeature/>
            </div>
          </div>
        </div>
    </div>
  );
}

export default WeatherDashboard;