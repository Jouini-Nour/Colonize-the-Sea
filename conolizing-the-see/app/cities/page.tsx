import React from 'react';
import BigCard from '@/app/components/BigCard';

const BigCardShowcase = () => {
    const cardData = [
        {
          imageUrl: '/images/atlantis.png',
          name: 'Atlantis Reborn',
          description: {
            population: '250,000',
            location: 'North Atlantic Ocean',
            date: 'June 15, 2030',
            city: 'New York City'
          }
        },
        {
          imageUrl: '/images/pacifica.jpg',
          name: 'Pacifica Haven',
          description: {
            population: '180,000',
            location: 'South Pacific Ocean',
            date: 'March 3, 2031',
            city: 'Sydney'
          }
        },
        {
          imageUrl: '/images/aquapolis.jpg',
          name: 'Aquapolis',
          description: {
            population: '320,000',
            location: 'Indian Ocean',
            date: 'September 22, 2029',
            city: 'Mumbai'
          }
        },
        {
          imageUrl: '/images/neo-venice.jpg',
          name: 'Neo Venice',
          description: {
            population: '150,000',
            location: 'Mediterranean Sea',
            date: 'July 7, 2032',
            city: 'Venice'
          }
        },
        {
          imageUrl: '/images/arctic-oasis.jpg',
          name: 'Arctic Oasis',
          description: {
            population: '100,000',
            location: 'Arctic Ocean',
            date: 'December 1, 2033',
            city: 'Reykjavik'
          }
        }
      ];
    

  return (
    <main className="container mx-auto px-4 py-12 relative flex flex-col items-center justify-center ">
        <div >
        <h1 className="text-4xl text-black font-bold text-center mb-8">Most Populated Projects</h1>
        {cardData.map((card, index) => (
            <div
            key={index}
            className="opacity-70 hover:opacity-100 transition-opacity duration-300 ease-in-out mb-8"
            >
            <BigCard
                imageUrl={card.imageUrl}
                name={card.name}
                description={card.description}
            />
            </div>
        ))}
        </div>
    </main>
  );
};

export default BigCardShowcase;