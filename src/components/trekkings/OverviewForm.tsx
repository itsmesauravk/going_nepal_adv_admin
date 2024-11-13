// Overview.js
import React from 'react';

const Overview = ({ overview, handleOverviewChange }) => (
  <div className="w-full">
    <label htmlFor="overview" className="block mb-2 text-sm font-medium text-gray-700">
      Overview
    </label>
    <textarea
      id="overview"
      name="overview"
      value={overview}
      onChange={handleOverviewChange}
      placeholder="Write a brief overview of the trek..."
      className="w-full p-2 border border-gray-300 rounded-md resize-none"
      rows={5}
    ></textarea>
    <div className="mt-2 text-sm text-gray-600">
      {overview ? `Overview Preview: ${overview}` : "No overview entered"}
    </div>
  </div>
);

export default Overview;
