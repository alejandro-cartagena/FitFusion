import React from 'react';
import './App.css';
import './Responsive.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Layouts imports below
import Layout from './components/Layout';
import FitnessLayout from './components/FitnessLayout';
import NutritionLayout from './components/NutritionLayout';
import PlansLayout from './components/PlansLayout';

// Pages imports below
import Home from './pages/Home';
import Plans from './pages/Plans';

import ScrollToTop from './components/ScrollToTop';

//Fitness Page imports
import Overview from './pages/Fitness/Overview';
import Anatomy from './pages/Fitness/Anatomy';
import Calculator from './pages/Fitness/Calculator';
import Progression from './pages/Fitness/Progression';
import GymFinderPage from './pages/Fitness/GymFinderPage';

// Nutrition Page imports
import NutritionOverview from './pages/Nutrition/NutritionOverview';
import Bmi from './pages/Nutrition/Bmi';
import Macros from './pages/Nutrition/Macros';

// Plans Page imports
import PlansOverview from './pages/Plans/PlansOverview';
import Strength from './pages/Plans/Strength';
import Hypertrophy from './pages/Plans/Hypertrophy';
import Calisthenics from './pages/Plans/Calisthenics';


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="fitness" element={<FitnessLayout />}>
              <Route index element={<Overview />} />
              <Route path="anatomy" element={<Anatomy />} />
              <Route path="calculator" element={<Calculator />} />
              <Route path="progression" element={<Progression />} />
              <Route path="gymNearMe" element={<GymFinderPage />} />
            </Route>
            <Route path="nutrition" element={<NutritionLayout />}>
              <Route index element={<NutritionOverview />} />
              <Route path="bmi" element={<Bmi />} />
              <Route path="macros" element={<Macros />} />
            </Route>
            <Route path="plans" element={<PlansLayout />}>
              <Route index element={<PlansOverview />} />
              <Route path="strength" element={<Strength />} />
              <Route path="hypertrophy" element={<Hypertrophy />} />
              <Route path="calisthenics" element={<Calisthenics />} />
            </Route>
          </Route>
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  );
}

export default App;
