"use client";

import Image from "next/image";
import RandomMealStyles from "./RandomMeal.module.scss";
import Link from "next/link";
import { fetchRandomMeal } from "@/utils/api";
import CircularProgress from "@mui/material/CircularProgress";
import useFetch from "@/utils/hooks";

export default function RandomMeal() {

  const { data: randomMeal, loading, refetch } = useFetch(fetchRandomMeal);

  return (
    <section className={RandomMealStyles.random_meal_wrapper}>
      {loading || randomMeal === null ? (
        <CircularProgress />
      ) : (
        <>
          <div className={RandomMealStyles.random_meal_img_wrapper}>
            <Image
              alt={randomMeal?.strMeal || "Random meal image"}
              src={randomMeal?.strMealThumb}
              fill
              style={{objectFit: "cover"}}
            />
          </div>

          <div className={RandomMealStyles.random_meal_info_wrapper}>
            <h2 className={RandomMealStyles.random_meal_title}>Random Meal</h2>
            <div className={RandomMealStyles.random_meal_details_wrapper}>
              <h3 className={RandomMealStyles.random_meal_name}>
                {randomMeal?.strMeal}
              </h3>

              <div className={RandomMealStyles.random_meal_tags_container}>
                <p className={RandomMealStyles.random_meal_tag}>
                  {randomMeal?.strArea}
                </p>
                <p className={RandomMealStyles.random_meal_tag}>
                  {randomMeal?.strCategory}
                </p>
              </div>
            </div>

            <button
              className={RandomMealStyles.random_meal_another_btn}
              onClick={refetch}
            >
              Show me another random meal
            </button>
            <Link
              href={`/recipes/${randomMeal?.idMeal}`}
              className={RandomMealStyles.random_meal_open_link}
            >
              open recipe
            </Link>
          </div>
        </>
      )}
    </section>
  );
}
