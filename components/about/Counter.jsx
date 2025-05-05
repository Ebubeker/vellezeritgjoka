import React from 'react';

const Counter = () => {
  const stats = [
    { number: '750+', text: 'Projects Completed' },
    { number: '85+', text: 'Professional Team' },
    { number: '100%', text: 'Customer Satisfaction' },
    { number: '25+', text: 'Years of Experience' }
  ];

  return (
    <div className="bg-green-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-sm">{stat.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Counter;