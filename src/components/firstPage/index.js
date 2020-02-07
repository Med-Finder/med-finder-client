import React from 'react';
import NavbarPage from './navbarPage';
import SearchBar from './searchBar';
import Map from './map-card';
export default function Index() {
  return (
    <div>
      <NavbarPage />
      <SearchBar />
      <Map />
      {/* comment it for less calls */}
    </div>
  );
}
