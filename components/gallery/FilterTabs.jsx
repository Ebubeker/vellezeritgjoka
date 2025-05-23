import React from 'react';

const FilterTabs = ({ activeFilter, onFilterChange }) => {
  const filters = [
    { id: 'all', label: 'All Images' },
    { id: 'garden-design', label: 'Garden Design' },
    { id: 'installation', label: 'Installation' },
    { id: 'maintenance', label: 'Maintenance' },
    { id: 'hardscaping', label: 'Hardscaping' }
  ];

  return (
    <div className="flex justify-center flex-wrap gap-4 mb-12">
      {filters.map((filter) => (
        <button
          key={filter.id}
          className={`px-6 py-3 rounded-full border-2 font-semibold text-sm uppercase tracking-wide transition-all duration-300 hover:-translate-y-1 ${
            activeFilter === filter.id
              ? 'bg-green-600 text-white border-green-600 shadow-lg shadow-green-600/30'
              : 'bg-white text-green-600 border-green-600 hover:bg-green-600 hover:text-white hover:shadow-lg hover:shadow-green-600/30'
          }`}
          onClick={() => onFilterChange(filter.id)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;