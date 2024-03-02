import React from 'react';
import AnatomyBack from '../components/AnatomyBack';
import AnatomyFront from '../components/AnatomyFront';

export default function Home() {
  return (
    <div className="flex">
      <AnatomyFront />
      <AnatomyBack />
    </div>
  );
}
