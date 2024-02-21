import React, { useState } from "react";

export default function SearchResults() {
  return (
    <>
      <div className="flex items-center"></div>
      {searchResults.map((result) => (
        <div key={result.id}>
          <p>result.title</p>
        </div>
      ))}
    </>
  );
}
