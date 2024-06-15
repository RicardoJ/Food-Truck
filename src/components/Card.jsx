import React from 'react';

export const Card = ({ title, address, locationDescription, foodItems }) => {
  return (
    <div
      className='flex w-5/12  gap-5 
    p-6 bg-white border border-gray-200 rounded-lg 
    shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
    >
      <div className='w-3/6'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {title}
        </h5>
        <span>Address:</span>
        <p className='font-normal text-gray-700 dark:text-gray-400'>
          {address}
        </p>
        <p className='font-normal text-gray-700 dark:text-gray-400'>
          {locationDescription}
        </p>
      </div>
      <div className='w-3/6 flex  items-center flex-col'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          Menu
        </h5>
        <ul>
          {foodItems?.split(':').map((foodItem) => (
            <li key={foodItem} className='list-disc capitalize'>
              {foodItem}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
