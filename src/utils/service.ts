//@ts-nocheck
import { MealAreaWithCode, MealsData } from "./types";
import DataMap from 'datamaps';

// Function to extract ingredients and their measures
export const extractIngredients = (meal: any) => {
  const ingredients = [];
  const measures = [];

  for (let i = 1; i <= 20; i++) {
    const ingredientKey = `strIngredient${i}`;
    const measureKey = `strMeasure${i}`;
    const ingredient = meal[ingredientKey];
    const measure = meal[measureKey];

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(ingredient);
      measures.push(measure);
    }
  }
  return { ingredients, measures };
};

//format a text into a list with every two sentences separated,
export function formatTextAsList(text: string) {
  // Split the text into sentences based on periods followed by space
  const sentences = text.match(/[^.!?]+[.!?]+(?:\s|$)/g) || [];

  // Group every two sentences together
  const groupedSentences = [];
  for (let i = 0; i < sentences.length; i += 2) {
    let group = sentences[i].trim();
    if (sentences[i + 1]) {
      group += " " + sentences[i + 1].trim();
    }
    groupedSentences.push(group);
  }

  // Format as an HTML list
  const listItems = groupedSentences
    .map((item, index) => `<li>${item}</li>`)
    .join("");

  return `<ol>${listItems}</ol>`;
}

//replaces /watch/ endpoint with  /embed/ youtube endpoint
export function embedYouTubeUrl(link: string) {
  return link.replace(/watch\?v=/, "embed/");
}

const areaToCountryCode: Record<string, string | null> = {
  'American': 'USA',
  'British': 'GBR',
  'Canadian': 'CAN',
  'Chinese': 'CHN',
  'Croatian': 'HRV',
  'Dutch': 'NLD',
  'Egyptian': 'EGY',
  'Filipino': 'PHL',
  'French': 'FRA',
  'Greek': 'GRC',
  'Indian': 'IND',
  'Irish': 'IRL',
  'Italian': 'ITA',
  'Jamaican': 'JAM',
  'Japanese': 'JPN',
  'Kenyan': 'KEN',
  'Malaysian': 'MYS',
  'Mexican': 'MEX',
  'Moroccan': 'MAR',
  'Polish': 'POL',
  'Portuguese': 'PRT',
  'Russian': 'RUS',
  'Spanish': 'ESP',
  'Thai': 'THA',
  'Tunisian': 'TUN',
  'Turkish': 'TUR',
  'Unknown': null, 
  'Vietnamese': 'VNM'
};

export function convertAreasToCountryCodes(data: MealsData): MealAreaWithCode[] {
  return data?.meals.map(areaObj => {
      const countryCode = areaToCountryCode[areaObj.strArea] || 'Unknown';
      return {
          ...areaObj,
          countryCode
      };
  });
}

/**
 * Initializes the DataMap with the given regions data.
 * 
 * @param {HTMLElement} element - The container element for the DataMap.
 * @param {Array} areasWithCountryCodes - Array of areas with country codes.
 */
export function initializeDataMap(element, areasWithCountryCodes) {
  const data = {};
  areasWithCountryCodes.forEach(area => {
      data[area.countryCode] = { fillKey: area.strArea };
  });

  // Clear any previous map instances
  if (element.childNodes.length > 0) {
      element.innerHTML = '';
  }

  // Initialize DataMaps
  new DataMap({
      element,
      fills: {
          defaultFill: '#f0f0f0',
          ...areasWithCountryCodes.reduce((fills, area) => {
              fills[area.strArea] = '#306596'; // Customize this color as needed
              return fills;
          }, {})
      },
      data,
      geographyConfig: {
          popupTemplate: function (geo, data) {
              return `<div class="hoverinfo"><strong>${geo.properties.name}</strong></div>`;
          },
          highlightFillColor: '#ff642f', // Color when hovered
          highlightBorderColor: '#e8e8e8', // Border color when hovered
          highlightBorderWidth: 2, // Border width when hovered
          highlightBorderOpacity: 1 // Border opacity when hovered
      }
  });
}

