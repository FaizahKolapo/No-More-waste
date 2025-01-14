import React from 'react';

const MapLink = ({ address }) => {
  const mapLink = `https://www.google.com/maps?q=${encodeURIComponent(address)}`;
  return (
    <a class = "map-link" href={mapLink} target="_blank" rel="noopener noreferrer">
      {address}
    </a>
  );
};

export default MapLink;
