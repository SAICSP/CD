import React from 'react';
import '../styles/components.css'


export default function CompanyCard({ company }) {
  return (
    <article className="card reveal">
      <div className="card-header">
        <h3 className="company-name">{company.name}</h3>
        <span className="chip">{company.industry}</span>
      </div>

      <p className="company-desc">{company.description}</p>

      <div className="card-meta">
        <div><strong>Location:</strong> {company.location}</div>
        <div><strong>Employees:</strong> {company.employees}</div>
      </div>

      
    </article>
  );
}
