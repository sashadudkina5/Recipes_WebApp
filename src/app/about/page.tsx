"use client";
import { useEffect, useState } from 'react';
import  { fetchCategoriesList, fetchMeal }  from '../../utils/api';

export default function About() {
    const [meal, setMeal] = useState<Meal | null>(null);

  useEffect(() => {
    async function getMeal() {
      const mealData = await fetchMeal();
    //   setMeal(mealData);

      const list = await fetchCategoriesList();
    //   setMeal(list);
    //   setMeal(list);
      console.log(list)
    }
    
    getMeal();
  }, []);

//   console.log(meal)

  interface Meal {
    strMeal: string;
    strInstructions: string;
    strMealThumb: string;
  }

  return (
    <>
      <h1>About</h1>
      {meal ? (
        <div>
          <h2>{meal.strMeal}</h2>
          <p>{meal.strInstructions}</p>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
