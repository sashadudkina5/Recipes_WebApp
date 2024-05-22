import axios from 'axios';

/**
 * returns an oject of a random meal info
 * @returns
 */
export async function fetchRandomMeal() {
  try {
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
    return response.data.meals[0];
  } catch (error) {
    console.error('Error getting random meal:', error);
    throw error;
  }
}

/**
 * returns an array of caregories
 * @returns
 */
export async function fetchCategoriesList() {
  try {
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    return response.data;
  } catch (error) {
    console.error('Error getting category list:', error);
    throw error;
  }
}

/**
 * returns an object with meal info by id
 * @returns
 */
export async function fetchMealInfo(mealID: string) {
  try {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`);
    return response.data;
  } catch (error) {
    console.error('Error getting meal info by id:', error);
    throw error;
  }
}
  