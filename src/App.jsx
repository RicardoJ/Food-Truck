import { useEffect, useState } from 'react';

import './App.css';
import { Card } from './components/Card';
import PageHeader from './components/PageHeader';
import { getFoodTrucks } from './services/getFoodTrucks';

function App() {
  const [foodTrucks, setFoodTrucks] = useState([]);

  useEffect(() => {
    getFoodTrucks().then((response) => {
      setFoodTrucks(response);
    });
  }, []);

  return (
    <>
      <PageHeader />
      <div className='flex justify-center  gap-6 mt-10 flex-wrap'>
        {foodTrucks.map((foodTruck) => (
          <Card
            key={foodTruck.objectid}
            title={foodTruck.applicant}
            address={foodTruck.address}
            locationDescription={foodTruck.locationdescription}
            foodItems={foodTruck.fooditems}
          />
        ))}
      </div>
    </>
  );
}

export default App;
