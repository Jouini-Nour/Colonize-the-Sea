import React from 'react';
import Card from '@/app/components/Card';

const MainPage = () => {
  const cards = [
    {
      imageUrl: '/globe.png',
      url: 'select-location',
      title: 'Explore the world',
      description: 'Choose the area where you want to build your own floating city and our model will find the most suitable location based on different data.'
    },
    {
      imageUrl: '/platform.jpeg',
      url: 'cities',
      title: 'Most populated projects',
      description: 'Take a look at our most populated floating cities where millions found shelter.'
    },
    {
      imageUrl: '/who knows.jpeg',
      url: 'incoming-projects',
      title: 'Our ongoing projects',
      description: 'Explore our ongoing projects and the our prominent floating cities.'
    }
  ];

  return (
    
      <main className="container mx-auto px-4 py-12 relative flex flex-col">
        {cards.map((card, index) => (
          <div
            key={index}
            className="opacity-70 hover:opacity-100 transition-opacity duration-300 ease-in-out mb-8"
            style={{
              marginLeft:(25*index).toString() + '%',
            }}
          >
            <Card
              imageUrl={card.imageUrl}
              title={card.title}
              description={card.description}
              url={card.url}
            />
          </div>
        ))}
      </main>
      
  );
};

export default MainPage;