import axios from 'axios';

/**
 * returns an oject of a random meal info
 * @returns
 */
export async function fetchMeal() {
  try {
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
    return response.data.meals[0];
  } catch (error) {
    console.error('Ошибка при получении данных о блюде:', error);
    throw error;
  }
}

/**
 * returns an object of a random meal info
 * @returns
 */
export async function fetchCategoriesList() {
  try {
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении списка категорий:', error);
    throw error;
  }
}
  