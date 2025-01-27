"use client";
import { fetchMealsByCategory } from "@/utils/api";
import Image from "next/image";
import styles from "./styles.module.scss";
import useFetch from "@/utils/hooks";
import Link from "next/link";

type Props = {
  params: {
    categoryName: string;
  };
};

export default function CategoryPage({ params }: Props) {
  const { data: category, loading } = useFetch(
    fetchMealsByCategory,
    params.categoryName
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!category || !category.meals || category.meals.length === 0) {
    return <div>No meal information found.</div>;
  }

  return (
    <div className={styles.category_page}>
      <h1>{params.categoryName}</h1>
      <ul className={styles.category_list}>
        {category.meals.map((meal: any) => {
          return (
            <Link
              href={`/recipes/${meal?.idMeal}`}
              key={meal.idMeal}
              className={styles.category_item}
            >
              <div className={styles.image_wrapper}>
                <Image
                  alt={meal?.strMeal || "Meal image"}
                  src={meal?.strMealThumb}
                  style={{ objectFit: "cover" }}
                  fill
                  priority={false}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className={styles.category_meal_title}>{meal.strMeal}</h3>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
