
import React from "react";
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then((res) => res.json())
      .then((data) => setData(data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {data.map((user, index) => (
        <div
          key={index}
          className='sm:flex w-full sm:w-[500px] sm:border-2 border-black m-auto sm:mt-44 bg-slate-200 '>
          <img
            className='w-full md:w-96 lg:h-full object-cover  p-4 cursor-pointer'
            src={user.picture.large} 
            alt={`${user.name.first} ${user.name.last}`} 
          />
          <div className='px-4 py-2 sm:mt-20 '>
            <p className=' text-lg lg:text-xl font-semibold text-gray-800 hover:text-blue-600 mt-4 mb-2'>
              {user.name.first}
            </p>
            <p className="className=' text-lg lg:text-xl font-semibold text-gray-800 hover:text-blue-600 sm:ml-24 sm:mt-[-35px] mb-2">
              {user.name.last}
            </p>
            <p className='leading-6 text-lg lg:text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300 mt-4 mb-2'>
              {user.gender}
            </p>
            <p className=' lg:text-base text-gray-600 mb-2 hover:text-blue-600 cursor-pointer font-semibold'>{user.phone}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;