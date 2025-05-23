import React from 'react';

const StatsSection = () => {
  const stats = [
    { number: '500+', label: 'Beautiful Images' },
    { number: '150+', label: 'Completed Projects' },
    { number: '15+', label: 'Years Experience' },
    { number: '100%', label: 'Satisfaction Rate' }
  ];

  return (
    <section className="bg-gradient-to-br from-green-900 to-green-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-3xl md:text-4xl font-bold">{stat.number}</h3>
              <p className="text-lg opacity-90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;