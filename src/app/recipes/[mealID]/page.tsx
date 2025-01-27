"use client";
import { fetchMealInfo } from "@/utils/api";
import {
  extractIngredients,
  formatTextAsList,
  embedYouTubeUrl,
} from "@/utils/service";
import Image from "next/image";
import styles from "./[mealID].module.scss";
import useFetch from "@/utils/hooks";

type Props = {
  params: {
    mealID: string;
  };
};

export default function RecipePages({ params }: Props) {

  const { data: mealInfo, loading } = useFetch(fetchMealInfo, params.mealID);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!mealInfo || !mealInfo.meals || mealInfo.meals.length === 0) {
    return <div>No meal information found.</div>;
  }

  const meal = mealInfo.meals[0];

  const { ingredients, measures } = extractIngredients(meal);

  return (
    <div className={styles.recipe_page}>
      <h1 className={styles.recipe_meal_title}>{meal.strMeal}</h1>

      <div className={styles.meal_basic_info_wrapper}>
        <div className={styles.meal_img_wrapper}>
          <Image
            alt={meal?.strMeal || "Random meal image"}
            src={meal?.strMealThumb}
            layout="fill"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className={styles.meal_tags_wrapper}>
          <span className={styles.meal_tags_item}>Region: {meal.strArea}</span>
          <span className={styles.meal_tags_item}>Category: {meal.strCategory}</span>
        </div>
      </div>

      <div className={styles.meal_ingredients_wrapper}>
        <h2 className={styles.meal_ingredients_title}>Ingredients</h2>
        <ul className={styles.meal_ingredients_list}>
          {ingredients.map((ingredient, index) => (
            <li key={index} className={styles.meal_ingredients_item_wrapper}>
              <span className={styles.meal_ingredients_item}>
                {ingredient}
              </span>
              <span className={styles.meal_ingredients_item}>
                {measures[index]}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.meal_instructions_wrapper}>
      <h2 className={styles.meal_instructions_title}>Instructions</h2>
      <div
        dangerouslySetInnerHTML={{
          __html: formatTextAsList(meal.strInstructions),
        }}
        className={styles.meal_instructions}
      />
      </div>

<div className={styles.meal_instructions_video_wrapper}>
  <iframe
    src={embedYouTubeUrl(meal.strYoutube)}
    title="Watch the cooking process"
    allowFullScreen={true}
  />
</div>
    </div>
  );
}
