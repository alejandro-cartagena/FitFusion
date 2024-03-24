import React from 'react';
import GymFinderTool from '../../components/GymFinderTool';

export default function GymFinderPage() {
  return (
    <div>
      <p className="mg-top">
        Discovering a nearby gym is a crucial step towards achieving your
        fitness goals. Our gym finder tool simplifies this process by allowing
        you to search for gyms in your area effortlessly. Just enter your zip
        code, and find the perfect gym to kickstart your fitness journey! Making
        it to the gym is half the battle, find a gym near you here!
      </p>
      <GymFinderTool />
    </div>
  );
}
