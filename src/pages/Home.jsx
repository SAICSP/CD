import React, { useMemo, useState } from 'react';
import useFetchCompanies from '../hooks/useFetchCompanies.js';
import Filters from '../components/Filters.jsx';
import CompanyCard from '../components/CompanyCard.jsx';
import Loader from '../components/Loader.jsx';
import { uniqueValues } from '../utils/helpers.js';

const PAGE_SIZE = 6;

export default function Home() {
  const { data: companies, loading, error } = useFetchCompanies();

  const [query, setQuery] = useState('');
  const [industry, setIndustry] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('name-asc');
  const [page, setPage] = useState(1);

  const industries = useMemo(() => uniqueValues(companies, 'industry'), [companies]);
  const locations = useMemo(() => uniqueValues(companies, 'location'), [companies]);

  const filtered = useMemo(() => {
    let res = companies.slice();

    if (query.trim()) {
      const q = query.toLowerCase();
      res = res.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          (c.description && c.description.toLowerCase().includes(q)) ||
          (c.industry && c.industry.toLowerCase().includes(q))
      );
    }

    if (industry) res = res.filter((c) => c.industry === industry);
    if (location) res = res.filter((c) => c.location === location);

    if (sortBy === 'name-asc') res.sort((a, b) => a.name.localeCompare(b.name));
    if (sortBy === 'name-desc') res.sort((a, b) => b.name.localeCompare(a.name));
    if (sortBy === 'employees-asc') res.sort((a, b) => a.employees - b.employees);
    if (sortBy === 'employees-desc') res.sort((a, b) => b.employees - a.employees);

    return res;
  }, [companies, query, industry, location, sortBy]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  React.useEffect(() => setPage(1), [query, industry, location, sortBy]);

  if (loading) return <Loader />;
  if (error) return <div className="center error">Error: {error}</div>;

  return (
    <div className="container">

      <Filters
        query={query}
        setQuery={setQuery}
        industry={industry}
        setIndustry={setIndustry}
        industries={industries}
        location={location}
        setLocation={setLocation}
        locations={locations}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <div className="results-info">
        <div>{filtered.length} results</div>
        <div className="small-muted">Page {page} / {totalPages}</div>
      </div>

      <div className="cards-grid">
        {paginated.map((c) => (
          <CompanyCard key={c.id} company={c} />
        ))}
      </div>

      <div className="pagination">
        <button onClick={() => setPage(1)} disabled={page === 1}>« First</button>
        <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>‹ Prev</button>
        <div className="page-number">Page {page} / {totalPages}</div>
        <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}>Next ›</button>
        <button onClick={() => setPage(totalPages)} disabled={page === totalPages}>Last »</button>
      </div>

    </div>
  );
}
