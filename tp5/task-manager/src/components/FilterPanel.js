function FilterPanel({ currentFilter, onFilterChange }) {
  return (
    <div>
      <button
        type="button"
        onClick={() => onFilterChange('all')}
        disabled={currentFilter === 'all'}
      >
        All
      </button>
      <button
        type="button"
        onClick={() => onFilterChange('active')}
        disabled={currentFilter === 'active'}
      >
        Active
      </button>
      <button
        type="button"
        onClick={() => onFilterChange('completed')}
        disabled={currentFilter === 'completed'}
      >
        Completed
      </button>
    </div>
  );
}

export default FilterPanel;