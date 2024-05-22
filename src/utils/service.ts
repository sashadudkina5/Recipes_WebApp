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
