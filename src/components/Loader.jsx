import React from 'react';

export default function Loader() {
  return (
    <div className="center">
      <div className="loader" role="status" aria-label="Loading"></div>
      <div className="small-muted">Loading companies…</div>
    </div>
  );
}
