import axios from 'axios';
import sharp from 'sharp';

const BASE_URL = "https://www.themealdb.com/api/json/v1/1/";

// Generic function to perform GET requests
async function fetchFromAPI(endpoint: string) {
  try {
    const url = `${BASE_URL}${endpoint}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from endpoint ${endpoint}:`, error);
    throw error;
  }
}


/**
 * Returns an object of a random meal info
 */
export function fetchRandomMeal() {
  return fetchFromAPI('random.php').then(data => data.meals[0]);
}

/**
 * Returns object with an array of categories
 */
export function fetchCategoriesList() {
  return fetchFromAPI('list.php?c=list');
}

/**
 * Returns object with an array of regions
 */
export function fetchRegionsList() {
  return fetchFromAPI('list.php?a=list');
}

/**
 * Returns an object with meal info by id
 */
export function fetchMealInfo(mealID: string) {
  return fetchFromAPI(`lookup.php?i=${mealID}`);
}

/**
 * Returns object with an array with meals by category
 */
export function fetchMealsByCategory(categoryName: string) {
  return fetchFromAPI(`filter.php?c=${categoryName}`);
}

  