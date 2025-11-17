import React from 'react';

export default function Filters({
  query,
  setQuery,
  industry,
  setIndustry,
  industries,
  location,
  setLocation,
  locations,
  sortBy,
  setSortBy,
  
}) {
  return (
    <div className="filters">
      <div className="filter-row">
        <input
          aria-label="search"
          type="search"
          placeholder="Search by company name, industry or description..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="input-search"
        />

        <select value={industry} onChange={(e) => setIndustry(e.target.value)} className="select">
          <option value="">All industries</option>
          {industries.map((ind) => <option key={ind} value={ind}>{ind}</option>)}
        </select>

        <select value={location} onChange={(e) => setLocation(e.target.value)} className="select">
          <option value="">All locations</option>
          {locations.map((loc) => <option key={loc} value={loc}>{loc}</option>)}
        </select>
      </div>

      <div className="filter-row">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="select">
          <option value="name-asc">Sort: Name A → Z</option>
          <option value="name-desc">Sort: Name Z → A</option>
          <option value="employees-asc">Sort: Employees ↑</option>
          <option value="employees-desc">Sort: Employees ↓</option>
        </select>


      </div>
    </div>
  );
}
