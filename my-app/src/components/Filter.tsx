import React from 'react';

function Filter({ filter, setFilter }) {
  return (
    <div className="filters">
      <button
        className={filter === 'All' ? 'active' : ''}
        onClick={() => setFilter('All')}
      >
        All
      </button>
      <button
        className={filter === 'Completed' ? 'active' : ''}
        onClick={() => setFilter('Completed')}
      >
        Completed
      </button>
      <button
        className={filter === 'Pending' ? 'active' : ''}
        onClick={() => setFilter('Pending')}
      >
        Pending
      </button>
    </div>
  );
}

export default Filter;
