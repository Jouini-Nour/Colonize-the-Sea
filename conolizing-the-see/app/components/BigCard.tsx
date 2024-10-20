import React from 'react';
import Image from 'next/image';

const BigCard = ({ imageUrl, name, description }) => {
  return (
    <div className="bg-[#FEF9D9] rounded-lg h-60 shadow-md overflow-hidden max-w-3xl  ">
      <div className="flex h-full">
        <div className="w-2/3 p-4">
          <h2 className="text-xl text-black font-semibold mb-2">{name}</h2>
          <p className="text-sm text-gray-600">Population: {description.population}</p>
          <p className="text-sm text-gray-600">Location: {description.location}</p>
          <p className="text-sm text-gray-600">Construction date: {description.date}</p>
          <p className="text-sm text-gray-600">Hosting city: {description.city}</p>
        </div>
        <div className="w-1/2 relative overflow-hidden">
          <Image
            src={imageUrl}
            alt={name}
            layout="fill" // or use layout="responsive" with width and height
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BigCard;
