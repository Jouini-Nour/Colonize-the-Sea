import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ imageUrl, title, description,url }) => {
  return (
    <Link key={title} href={url} className="flex bg-[#FEF9D9] rounded-lg h-52 shadow-md overflow-hidden max-w-3xl">
      <div className=" w-1/3 relative">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="w-2/3 p-4">
        <h2 className="text-xl text-black font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export default Card;